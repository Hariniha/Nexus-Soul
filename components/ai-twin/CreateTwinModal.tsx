'use client';

import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input, Textarea } from '../ui/Input';
import { ArrowRight, ArrowLeft, Upload, X, CheckCircle, Sparkles, FileText, Image as ImageIcon } from 'lucide-react';

interface CreateTwinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (data: TwinData) => void;
}

interface TwinData {
  name: string;
  dateOfBirth: string;
  bio: string;
  files: File[];
  character: string;
  twinName: string;
  tone: string;
}

type Step = 1 | 2 | 3;

export const CreateTwinModal: React.FC<CreateTwinModalProps> = ({
  isOpen,
  onClose,
  onComplete
}) => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<TwinData>({
    name: '',
    dateOfBirth: '',
    bio: '',
    files: [],
    character: 'geometric',
    twinName: 'My Digital Twin',
    tone: 'Friendly'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleNext = () => {
    // Validate current step
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    }
    
    if (step === 2) {
      if (formData.files.length === 0) {
        newErrors.files = 'Please upload at least one file';
        return;
      }
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    if (step < 3) {
      setStep((step + 1) as Step);
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as Step);
    }
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({ ...formData, files: [...formData.files, ...files] });
    setErrors({ ...errors, files: '' });
  };
  
  const removeFile = (index: number) => {
    const newFiles = formData.files.filter((_, i) => i !== index);
    setFormData({ ...formData, files: newFiles });
  };
  
  const handleComplete = () => {
    onComplete(formData);
    // Reset form
    setFormData({
      name: '',
      dateOfBirth: '',
      bio: '',
      files: [],
      character: 'geometric',
      twinName: 'My Digital Twin',
      tone: 'Friendly'
    });
    setStep(1);
  };
  
  const characters = [
    'Geometric', 'Minimal', 'Tech', 'Nature', 
    'Cosmic', 'Professional', 'Creative', 'Modern'
  ];
  
  const tones = ['Professional', 'Casual', 'Friendly'];
  
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      title="Create Your AI Twin"
      maxWidth="3xl"
    >
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {[1, 2, 3].map((s, idx) => (
          <React.Fragment key={s}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-200 ${
                  s < step
                    ? 'bg-[#059669] border-[#059669] text-white'
                    : s === step
                    ? 'bg-[#D97706] border-[#D97706] text-white'
                    : 'bg-[#1E1E1E] border-[#404040] text-[#525252]'
                }`}
              >
                {s < step ? <CheckCircle className="w-5 h-5" /> : s}
              </div>
              <span
                className={`text-xs mt-2 ${
                  s === step ? 'text-[#D97706]' : 'text-[#525252]'
                }`}
              >
                {s === 1 ? 'Basic Info' : s === 2 ? 'Upload Data' : 'Customize'}
              </span>
            </div>
            {idx < 2 && (
              <div
                className={`w-16 h-0.5 ${
                  s < step ? 'bg-[#D97706]' : 'bg-[#262626]'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Step Content */}
      <div className="space-y-6">
        {step === 1 && (
          <>
            <Input
              label="What should we call you?"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
              required
            />
            
            <Input
              label="Date of Birth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              error={errors.dateOfBirth}
              required
            />
            
            <Textarea
              label="Tell us about yourself (Optional)"
              placeholder="Your interests, personality, what makes you unique..."
              rows={4}
              maxLength={500}
              showCounter
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            />
          </>
        )}
        
        {step === 2 && (
          <>
            <div>
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Upload Your Data</h3>
              <p className="text-sm text-[#A3A3A3] mb-4">
                Upload conversations, emails, documents, or images containing your messages.
              </p>
            </div>
            
            {/* File Upload Zone */}
            <label className="block">
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                accept=".png,.jpg,.jpeg,.txt,.pdf"
              />
              <div className="border-2 border-dashed border-[#404040] rounded-xl p-8 text-center cursor-pointer hover:border-[#D97706] hover:bg-[#1C1C1C] transition-all duration-200">
                <Upload className="w-12 h-12 text-[#D97706] mx-auto mb-4" />
                <p className="text-base text-[#F5F5F5] mb-2">Drag and drop files here</p>
                <p className="text-sm text-[#A3A3A3] mb-1">or click to browse</p>
                <p className="text-xs text-[#525252]">PNG, JPG, TXT, PDF (max 5MB per file)</p>
              </div>
            </label>
            
            {errors.files && (
              <p className="text-sm text-[#DC2626]">{errors.files}</p>
            )}
            
            {/* Uploaded Files List */}
            {formData.files.length > 0 && (
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {formData.files.map((file, index) => (
                  <div
                    key={index}
                    className="bg-[#1E1E1E] border border-[#262626] p-4 rounded-lg flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      {file.type.startsWith('image/') ? (
                        <ImageIcon className="w-5 h-5 text-[#D97706]" />
                      ) : (
                        <FileText className="w-5 h-5 text-[#D97706]" />
                      )}
                      <div>
                        <p className="text-sm font-medium text-[#F5F5F5]">{file.name}</p>
                        <p className="text-xs text-[#525252]">
                          {(file.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-[#525252] hover:text-[#DC2626] transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        
        {step === 3 && (
          <>
            <div>
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-6">
                Choose Your Digital Appearance
              </h3>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                {characters.map((char) => (
                  <div
                    key={char}
                    onClick={() => setFormData({ ...formData, character: char.toLowerCase() })}
                    className={`aspect-square bg-[#1E1E1E] border-2 rounded-xl p-4 cursor-pointer flex items-center justify-center transition-all duration-200 hover:scale-105 ${
                      formData.character === char.toLowerCase()
                        ? 'border-[#D97706] shadow-lg shadow-orange-900/20'
                        : 'border-[#262626] hover:border-[#404040]'
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#D97706]/30 to-[#DC2626]/30 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-medium text-[#F5F5F5]">{char}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Input
              label="Name Your AI Twin"
              placeholder="My Digital Twin"
              value={formData.twinName}
              onChange={(e) => setFormData({ ...formData, twinName: e.target.value })}
              maxLength={50}
            />
            
            <div>
              <label className="block text-sm font-medium text-[#F5F5F5] mb-3">
                Conversation Style
              </label>
              <div className="flex gap-3">
                {tones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setFormData({ ...formData, tone })}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      formData.tone === tone
                        ? 'bg-[#D97706] text-white border border-[#D97706]'
                        : 'bg-[#1E1E1E] border border-[#262626] text-[#A3A3A3] hover:border-[#404040]'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-between gap-3 mt-8">
        {step > 1 && (
          <Button
            variant="ghost"
            size="medium"
            icon={ArrowLeft}
            iconPosition="left"
            onClick={handleBack}
          >
            Back
          </Button>
        )}
        
        <div className="ml-auto">
          {step < 3 ? (
            <Button
              variant="primary"
              size="medium"
              icon={ArrowRight}
              onClick={handleNext}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="primary"
              size="medium"
              icon={Sparkles}
              iconPosition="left"
              onClick={handleComplete}
            >
              Create My AI Twin
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};
