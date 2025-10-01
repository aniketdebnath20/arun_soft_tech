
import { cn } from "@/lib/utils";

type IntroAnimationProps = {
  isVisible: boolean;
};

export default function IntroAnimation({ isVisible }: IntroAnimationProps) {
  return (
    <div
      id="intro-animation"
      className={cn(
        "fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="text-center animate-fade-in-zoom">
        <h1
          className={cn(
            "text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-foreground to-background bg-no-repeat bg-[length:100%_200%] animate-text-fill",
            !isVisible && "animate-text-wipe-out"
          )}
        >
          Arun Soft Tech
        </h1>
        <div className="mt-4 animate-pulse">
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
