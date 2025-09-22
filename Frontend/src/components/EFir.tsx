

import { FileText } from 'lucide-react';

const EFir = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">E-FIR</h1>
        <p className="text-gray-600">Electronic First Information Report management system</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">E-FIR System</h3>
          <p className="text-gray-600">Digital incident reporting and case management</p>
        </div>
      </div>
    </div>
  );
};

export default EFir;
