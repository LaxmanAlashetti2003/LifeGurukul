import { useState } from 'react';
import ScrollCTAPopup from '../ScrollCTAPopup';
import { Button } from '@/components/ui/button';

export default function ScrollCTAPopupExample() {
  const [forceShow, setForceShow] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setForceShow(true)}>Show Popup Preview</Button>
      {forceShow && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <ScrollCTAPopup />
        </div>
      )}
      <p className="mt-4 text-sm text-muted-foreground">
        Note: In the actual app, this popup appears automatically after scrolling 40% of the page (only once).
      </p>
    </div>
  );
}
