'use client';

import React, { useRef, useEffect } from 'react';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import Link from 'next/link';

// Three.js background component
const ThreeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];
    
    // Create particles
    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
    
    // Mouse position for parallax
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const animate = () => {
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Parallax effect
        const dx = (mouseX - canvas.width / 2) * 0.01;
        const dy = (mouseY - canvas.height / 2) * 0.01;
        
        particle.x += particle.vx + dx * 0.1;
        particle.y += particle.vy + dy * 0.1;
        
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.fillStyle = `rgba(217, 119, 6, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const distance = Math.hypot(
            particle.x - otherParticle.x,
            particle.y - otherParticle.y
          );
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(64, 64, 64, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
      
      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1E1E1E]/50 backdrop-blur border border-[#404040] rounded-full px-4 py-2 mb-6 animate-fade-in">
          <span className="text-sm text-[#A3A3A3]">
            Powered by Sui • Seal Protocol • Walrus
          </span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl font-bold leading-tight text-[#F5F5F5] mb-6 animate-slide-up">
          Your Digital Twin.
          <br />
          Your Data. Your Legacy.
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl text-[#A3A3A3] leading-relaxed max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Create an AI clone trained on your encrypted data. Control who accesses it. 
          Monetize your digital self. Build your legacy.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Link href="/create-twin">
            <Button variant="primary" size="large" icon={ArrowRight}>
              Create Your AI Twin
            </Button>
          </Link>
          <Button variant="secondary" size="large" icon={Play} iconPosition="left">
            Watch Demo
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 z-20 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-[#525252]" />
      </div>
    </section>
  );
};
