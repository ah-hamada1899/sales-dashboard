import React from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

interface FilterBarProps {
  threshold: number;
  onThresholdChange: (value: number) => void;
  onApplyFilter: () => void;
  onResetFilter: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  threshold,
  onThresholdChange,
  onApplyFilter,
  onResetFilter,
}) => {
  return (
    <div className="flex gap-4 items-end bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
      <Input
        type="number"
        placeholder="Sales threshold"
        value={threshold}
        onChange={(e) => onThresholdChange(Number(e.target.value))}
        label="Sales Threshold ($)"
      />
      <Button onClick={onApplyFilter} variant="primary">
        Apply Filter
      </Button>
      <Button onClick={onResetFilter} variant="secondary">
        Reset
      </Button>
    </div>
  );
};