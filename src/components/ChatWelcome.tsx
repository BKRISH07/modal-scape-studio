const ChatWelcome = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-foreground mb-2">AskIT</h2>
        <p className="text-text-subtle max-w-md">
          Chat with AskIT, the UITS Support Center Virtual Assistant!
        </p>
      </div>
      
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-iu-red/10 border border-iu-red/20 mb-6">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-iu-red text-primary-foreground font-bold text-xs">
          IU
        </div>
      </div>
      
      <div className="bg-card rounded-lg p-4 border border-border max-w-md">
        <p className="text-sm text-foreground">
          Hi! I'm AskIT, here to answer your IU technology questions. Ask me anything about IT at IU and I'll do my best to help out!
        </p>
      </div>
    </div>
  );
};

export default ChatWelcome;