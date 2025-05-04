{
  // interface ---> generic

  interface Developer<T, x = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: x;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "shahidul",
    computer: {
      brand: "dell",
      model: "inspiron",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "samsung",
      model: "galaxy watch",
      display: "oled",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface Honda {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<AppleWatch, Honda> = {
    name: "rich dev",
    computer: {
      brand: "apple",
      model: "inspiron",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "samsung watch",
      model: "galaxy something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
        model: "honda",
        engineCapacity: "250cc",
    }
  };

  //
}
