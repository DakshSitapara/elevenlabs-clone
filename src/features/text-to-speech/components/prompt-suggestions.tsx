"use client";

import {
  BookOpen,
  Smile,
  Mic,
  Languages,
  Clapperboard,
  Gamepad2,
  Podcast,
  Brain,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";

import type { LucideIcon } from "lucide-react";

const PROMPT_SUGGESTIONS: {
  label: string;
  prompt: string;
  icon: LucideIcon;
}[] = [
  {
    label: "Narrate a story",
    prompt:
      "In a village tucked between mist-covered mountains, there lived an old clockmaker whose clocks never told the right time — but they always told the truth. One rainy evening, a stranger walked in and asked for a clock that could show him his future.",
    icon: BookOpen,
  },
  {
    label: "Tell a silly joke",
    prompt:
      "Why don't scientists trust atoms? Because they make up everything! And honestly, I once asked an atom if it was positive about that — it said it had lost an electron. I said, are you sure? It replied, I'm positive!",
    icon: Smile,
  },
  {
    label: "Record an advertisement",
    prompt:
      "Introducing BrightBean Coffee — the smoothest roast you'll ever taste. Sourced from high-altitude farms, slow-roasted to perfection, and delivered fresh to your door every single week. Wake up to something extraordinary. Try BrightBean today and get your first bag free.",
    icon: Mic,
  },
  {
    label: "Speak in different languages",
    prompt:
      "Hello and welcome! Today we're going on a journey around the world. Bonjour, comment allez-vous? Hola, bienvenidos a todos. Guten Tag, willkommen bei uns. Ciao a tutti, benvenuti. Let's celebrate the beauty of language together.",
    icon: Languages,
  },
  {
    label: "Direct a dramatic movie scene",
    prompt:
      "The rain hammered against the window as she turned to face him. You knew, didn't you? she whispered, her voice barely holding together. He stepped forward, jaw clenched. I did what I had to do. The silence between them was louder than the storm outside.",
    icon: Clapperboard,
  },
  {
    label: "Hear from a video game character",
    prompt:
      "Listen up, adventurer. The realm of Ashenvale is crumbling, and the Crystal of Eternity has been shattered into seven pieces. You are the only one who can reassemble it. Gather your courage, sharpen your blade, and meet me at the Gates of Dawn. Time is not on our side.",
    icon: Gamepad2,
  },
  {
    label: "Introduce your podcast",
    prompt:
      "Hey everyone, welcome back to another episode of The Curious Mind — the podcast where we dig into the stories, science, and strange ideas that shape our world. I'm your host, and today we have an incredible guest who's going to challenge everything you thought you knew.",
    icon: Podcast,
  },
  {
    label: "Guide a meditation class",
    prompt:
      "Close your eyes and take a deep breath in. Hold it gently... and release. Feel the weight of the day slowly melting away. With each breath, you're sinking deeper into calm. There is nowhere else you need to be. Just here. Just now. Breathe in peace, breathe out tension.",
    icon: Brain,
  },
  {
    label: "Explain a science concept",
    prompt:
      "Have you ever wondered how black holes work? A black hole forms when a massive star collapses under its own gravity, creating a region in space where the gravitational pull is so strong that nothing, not even light, can escape. Scientists study them to understand how gravity, space, and time behave under extreme conditions.",
    icon: Brain,
  },
  {
    label: "Motivational speech",
    prompt:
      "Every great achievement begins with a single step. You don't need to be perfect to start, and you don't need to have everything figured out. What matters is your willingness to move forward, learn from mistakes, and keep going even when things get difficult.",
    icon: Mic,
  },
  {
    label: "Fun fact of the day",
    prompt:
      "Here's a fun fact: Octopuses have three hearts and blue blood. Two hearts pump blood to the gills, while the third pumps it to the rest of the body. Even more fascinating — they are incredibly intelligent and can solve puzzles, escape enclosures, and even recognize individual humans.",
    icon: Smile,
  },
  {
    label: "Teach a quick lesson",
    prompt:
      "Let's learn something new today: the concept of compound interest. Compound interest means earning interest not only on the money you invest but also on the interest that money generates over time. It's often called the 'eighth wonder of the world' because of how powerful it can be for long-term investing.",
    icon: BookOpen,
  },
  {
    label: "Fantasy adventure intro",
    prompt:
      "The wind howled across the ancient ruins as you stepped onto the forgotten path. Legends say that beyond the Emerald Forest lies the Temple of Light, where a relic of unimaginable power rests. Few have dared to search for it — and none have returned.",
    icon: Gamepad2,
  },
  {
    label: "Movie trailer voice",
    prompt:
      "In a world where technology controls everything, one person will rise to challenge the system. From the creators of the year's biggest blockbuster comes a story of courage, betrayal, and hope. This summer… the future will be rewritten.",
    icon: Clapperboard,
  },
  {
    label: "Daily news briefing",
    prompt:
      "Good morning and welcome to your daily news briefing. Today we cover the latest developments in technology, global markets, and climate research. Experts say innovation in artificial intelligence is accelerating faster than ever before.",
    icon: Podcast,
  },
  {
    label: "Positive affirmations",
    prompt:
      "Take a deep breath and remind yourself: I am capable. I am growing every day. Challenges are opportunities for me to learn and become stronger. I choose to focus on progress, not perfection.",
    icon: Brain,
  },
  {
    label: "Travel guide narration",
    prompt:
      "Welcome to Kyoto, Japan — a city where ancient tradition meets modern beauty. As you walk through the historic streets, you'll discover centuries-old temples, peaceful gardens, and vibrant markets filled with local culture and cuisine.",
    icon: Languages,
  },
  {
    label: "Kids bedtime story",
    prompt:
      "Once upon a time, in a forest filled with glowing fireflies, there lived a tiny rabbit named Milo who dreamed of touching the stars. One night, with the help of a wise old owl, Milo set out on an adventure that would change his life forever.",
    icon: BookOpen,
  },
  {
    label: "Explain Artificial Intelligence",
    prompt:
      "Artificial Intelligence, often called AI, refers to computer systems designed to perform tasks that normally require human intelligence. These tasks include recognizing speech, analyzing data, making decisions, and even generating creative content.",
    icon: Brain,
  },
  {
    label: "Tech product launch",
    prompt:
      "Introducing the all-new NovaPhone X — designed for speed, built for creativity, and powered by next-generation AI. Experience stunning photography, lightning-fast performance, and a battery that lasts all day.",
    icon: Mic,
  },
  {
    label: "Nature documentary voice",
    prompt:
      "Deep within the Amazon rainforest, life moves in rhythms older than humanity itself. Towering trees form a canopy above, while thousands of species live hidden beneath the leaves.",
    icon: Podcast,
  },
  {
    label: "Startup pitch",
    prompt:
      "Imagine a world where managing your finances takes just a few seconds. Our platform uses AI to track spending, predict savings opportunities, and help users make smarter financial decisions.",
    icon: Mic,
  },
  {
    label: "Historical narration",
    prompt:
      "In the year 1969, humanity achieved something extraordinary. For the first time in history, astronauts set foot on the Moon, marking one of the greatest milestones in scientific exploration.",
    icon: BookOpen,
  },
  {
    label: "Space exploration",
    prompt:
      "Beyond our planet lies an endless universe filled with galaxies, stars, and mysteries waiting to be discovered. Space exploration helps us understand not only the cosmos but also the origins of our own world.",
    icon: Brain,
  },
  {
    label: "Daily productivity tip",
    prompt:
      "One simple productivity tip is the two-minute rule: if a task takes less than two minutes to complete, do it immediately instead of postponing it.",
    icon: Smile,
  },
  {
    label: "Gaming mission briefing",
    prompt:
      "Commander, our scouts have discovered enemy activity near the northern ridge. Your mission is to infiltrate the base, retrieve the data core, and escape before reinforcements arrive.",
    icon: Gamepad2,
  },
  {
    label: "Cooking show intro",
    prompt:
      "Welcome back to the kitchen! Today we're making a simple but delicious pasta recipe that takes less than 20 minutes to prepare and is perfect for a quick weeknight dinner.",
    icon: Smile,
  },
  {
    label: "Travel vlog intro",
    prompt:
      "Today we're exploring one of the most beautiful coastal towns in the world. From stunning ocean views to incredible street food, this place has something unforgettable around every corner.",
    icon: Languages,
  },
  {
    label: "Leadership advice",
    prompt:
      "Great leaders don't just give instructions — they inspire action. Leadership is about creating trust, encouraging growth, and helping people perform at their very best.",
    icon: Brain,
  },
  {
    label: "Educational explainer",
    prompt:
      "Photosynthesis is the process by which plants convert sunlight into energy. Using sunlight, water, and carbon dioxide, plants create glucose and oxygen, sustaining life on Earth.",
    icon: BookOpen,
  },
  {
    label: "Fitness coach motivation",
    prompt:
      "Remember, progress doesn't happen overnight. Every workout, every healthy choice, and every step forward brings you closer to your goals.",
    icon: Mic,
  },
  {
    label: "Movie narrator",
    prompt:
      "In a quiet town where nothing unusual ever happens, a mysterious discovery will change everything. Secrets will surface, friendships will be tested, and nothing will ever be the same.",
    icon: Clapperboard,
  },
  {
    label: "Future technology",
    prompt:
      "Imagine cities powered entirely by renewable energy, autonomous vehicles that eliminate traffic accidents, and AI assistants that help solve global challenges.",
    icon: Brain,
  },
  {
    label: "Entrepreneur mindset",
    prompt:
      "Successful entrepreneurs see problems as opportunities. Instead of asking why something won't work, they ask how it could work better.",
    icon: Mic,
  },
  {
    label: "Science curiosity",
    prompt:
      "Did you know that lightning can heat the air around it to temperatures five times hotter than the surface of the sun?",
    icon: Smile,
  },
  {
    label: "Adventure storytelling",
    prompt:
      "The map was old and torn, but it clearly marked a path leading deep into the desert. Somewhere beyond the dunes, a hidden city was said to hold treasures lost to time.",
    icon: Gamepad2,
  },
  {
    label: "Mindfulness reminder",
    prompt:
      "Take a moment to pause. Notice your breathing, the sounds around you, and the present moment. Mindfulness helps calm the mind and bring clarity to your thoughts.",
    icon: Brain,
  },
  {
    label: "Innovation talk",
    prompt:
      "Innovation happens when curiosity meets persistence. The greatest inventions in history began with simple questions: what if, and why not?",
    icon: Mic,
  },
  {
    label: "Learning tip",
    prompt:
      "One of the best ways to learn something new is by teaching it to someone else. Explaining concepts forces your brain to understand them more deeply.",
    icon: BookOpen,
  },
];

export function PromptSuggestions({
  onSelect,
}: {
  onSelect: (prompt: string) => void;
}) {
  return (
    <div className="space-y-2.5">
      <p className="text-sm text-muted-foreground">Get started with</p>

      <ScrollArea className="h-32 w-full">
        <div className="flex flex-wrap gap-2 p-2">
          {PROMPT_SUGGESTIONS.map((suggestion) => (
            <Badge
              key={suggestion.label}
              variant="outline"
              className="cursor-pointer flex items-center gap-1.5 py-1 px-2.5 text-xs hover:bg-accent rounded-md transition-colors"
              onClick={() => onSelect(suggestion.prompt)}
            >
              <suggestion.icon className="size-3.5 shrink-0" />
              {suggestion.label}
            </Badge>
          ))}
        </div>

        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
