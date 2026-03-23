import { useState } from 'react';
import { X } from 'lucide-react';
import type { ParentInstitution } from '../types';

interface AddInstitutionFormProps {
  onClose: () => void;
  onSave: (name: string, type: string, parentInstitutionId?: number) => void;
  parentInstitutions: ParentInstitution[];
}

export function AddInstitutionForm({ onClose, onSave, parentInstitutions }: AddInstitutionFormProps) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [parentInstitutionId, setParentInstitutionId] = useState<number | undefined>(undefined);

  const handleSave = () => {
    if (name.trim() && type.trim()) {
      onSave(name.trim(), type.trim(), parentInstitutionId);
      setName('');
      setType('');
      setParentInstitutionId(undefined);
    }
  };

  return (
    <div className="bg-[var(--card)] relative rounded-[var(--radius-card)] w-full max-h-[calc(100vh-170px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
      
      <div className="flex flex-col p-[24px] gap-[24px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-[length:var(--text-lg)] text-[var(--foreground)]">
            New Institution
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center size-[32px] rounded-[var(--radius-button-small)] hover:bg-[var(--sidebar-primary)] transition-colors"
          >
            <X className="size-[16px] text-[var(--foreground)]" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-[16px]">
          {/* Institution Name */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[length:var(--text-sm)] text-[var(--foreground)] font-semibold">
              Institution Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter institution name"
              className="w-full px-[12px] py-[10px] rounded-[var(--radius)] border border-[var(--card-border)] bg-[var(--card)] text-[length:var(--text-base)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)]"
            />
          </div>

          {/* Institution Type */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[length:var(--text-sm)] text-[var(--foreground)] font-semibold">
              Type
            </label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="e.g., Constitutional, Financial, Judicial"
              className="w-full px-[12px] py-[10px] rounded-[var(--radius)] border border-[var(--card-border)] bg-[var(--card)] text-[length:var(--text-base)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)]"
            />
          </div>

          {/* Parent Institution */}
          <div className="flex flex-col gap-[8px]">
            <label className="text-[length:var(--text-sm)] text-[var(--foreground)] font-semibold">
              Parent Institution
            </label>
            <select
              value={parentInstitutionId}
              onChange={(e) => setParentInstitutionId(e.target.value ? parseInt(e.target.value) : undefined)}
              className="w-full px-[12px] py-[10px] rounded-[var(--radius)] border border-[var(--card-border)] bg-[var(--card)] text-[length:var(--text-base)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)]"
            >
              <option value="">None</option>
              {parentInstitutions.map((institution) => (
                <option key={institution.id} value={institution.id}>
                  {institution.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-[12px] justify-end">
          <button
            onClick={onClose}
            className="px-[16px] py-[10px] rounded-[var(--radius-button)] text-[length:var(--text-base)] text-[var(--foreground)] hover:bg-[var(--sidebar-primary)] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!name.trim() || !type.trim()}
            className="px-[16px] py-[10px] rounded-[var(--radius-button)] bg-[var(--accent)] text-white text-[length:var(--text-base)] hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Save Institution
          </button>
        </div>
      </div>
    </div>
  );
}