import ChatHeader from "@/components/ChatHeader";
import ChatWelcome from "@/components/ChatWelcome";
import ChatInput from "@/components/ChatInput";

const Index = () => {
  return (
    <div className="min-h-screen bg-chat-bg flex flex-col">
      <ChatHeader />
      
      <main className="flex-1 flex items-center justify-center py-8">
        <ChatWelcome />
      </main>
      
      <ChatInput />
    </div>
  );
};

export default Index;
