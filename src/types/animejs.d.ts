declare module 'animejs/lib/anime.es.js' {
  interface AnimeParams {
    targets: string | Element | Element[];
    opacity?: [number, number];
    translateY?: [number, number];
    translateX?: [number, number];
    duration?: number;
    easing?: string;
    delay?: number | ((i: number, l: number) => number);
  }

  interface AnimeStaggerParams {
    start?: number;
  }

  interface Anime {
    (params: AnimeParams): void;
    stagger(duration: number, params?: AnimeStaggerParams): (i: number, l: number) => number;
    timeline(params?: any): {
      add: (params: any, offset?: string | number) => any;
    };
  }

  const anime: Anime;
  export default anime;
}
