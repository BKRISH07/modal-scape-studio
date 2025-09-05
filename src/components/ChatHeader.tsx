import { Button } from "@/components/ui/button";

const ChatHeader = () => {
  return (
    <header className="w-full border-b border-border bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-iu-red text-primary-foreground font-bold text-sm">
            IU
          </div>
          <h1 className="text-lg font-medium text-foreground">Chat AIU</h1>
        </div>
        <Button variant="ghost" className="text-text-subtle hover:text-foreground">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default ChatHeader;