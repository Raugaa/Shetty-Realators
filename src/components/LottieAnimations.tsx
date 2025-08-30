import Lottie from "lottie-react";
import { useRef, useEffect } from "react";

// Real Estate Agent Animation
const realEstateAnimation = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 180,
  "w": 400,
  "h": 400,
  "nm": "Real Estate Agent",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Agent",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 0, "k": 0},
        "p": {"a": 0, "k": [200, 200, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ix": 1,
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  "v": [[0, -80], [20, -60], [30, -40], [20, -20], [0, 0], [-20, -20], [-30, -40], [-20, -60]],
                  "c": false
                }
              }
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.95, 0.8, 0.6, 1]},
              "o": {"a": 0, "k": 100},
              "r": 1,
              "bm": 0,
              "nm": "Head",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5}
            }
          ],
          "nm": "Head",
          "mn": "ADBE Vector Group",
          "hd": false
        },
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ix": 1,
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
                  "v": [[-15, 0], [15, 0], [15, 80], [-15, 80]],
                  "c": false
                }
              }
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.2, 0.4, 0.8, 1]},
              "o": {"a": 0, "k": 100},
              "r": 1,
              "bm": 0,
              "nm": "Body",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5}
            }
          ],
          "nm": "Body",
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ]
    }
  ]
};

// Success Person Animation
const successAnimation = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 120,
  "w": 300,
  "h": 300,
  "nm": "Success Person",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Person",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {
          "a": 1,
          "k": [
            {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
            {"t": 60, "s": [10]},
            {"t": 120, "s": [0]}
          ]
        },
        "p": {"a": 0, "k": [150, 150, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {
          "a": 1,
          "k": [
            {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [100, 100, 100]},
            {"t": 60, "s": [110, 110, 100]},
            {"t": 120, "s": [100, 100, 100]}
          ]
        }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ix": 1,
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  "v": [[0, -60], [15, -45], [20, -25], [15, -5], [0, 10], [-15, -5], [-20, -25], [-15, -45]],
                  "c": false
                }
              }
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.95, 0.8, 0.6, 1]},
              "o": {"a": 0, "k": 100},
              "r": 1,
              "bm": 0,
              "nm": "Head",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5}
            }
          ],
          "nm": "Head",
          "mn": "ADBE Vector Group",
          "hd": false
        },
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ix": 1,
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
                  "v": [[-10, 10], [10, 10], [10, 60], [-10, 60]],
                  "c": false
                }
              }
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.2, 0.8, 0.2, 1]},
              "o": {"a": 0, "k": 100},
              "r": 1,
              "bm": 0,
              "nm": "Body",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5}
            }
          ],
          "nm": "Body",
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ]
    }
  ]
};

// Walking Person Animation
const loadingAnimation = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 90,
  "w": 300,
  "h": 300,
  "nm": "Walking Person",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Person",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {
          "a": 1,
          "k": [
            {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
            {"t": 45, "s": [5]},
            {"t": 90, "s": [0]}
          ]
        },
        "p": {
          "a": 1,
          "k": [
            {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [150, 150, 0]},
            {"t": 45, "s": [150, 140, 0]},
            {"t": 90, "s": [150, 150, 0]}
          ]
        },
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ix": 1,
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  "v": [[0, -50], [12, -38], [16, -20], [12, -2], [0, 8], [-12, -2], [-16, -20], [-12, -38]],
                  "c": false
                }
              }
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.95, 0.8, 0.6, 1]},
              "o": {"a": 0, "k": 100},
              "r": 1,
              "bm": 0,
              "nm": "Head",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5}
            }
          ],
          "nm": "Head",
          "mn": "ADBE Vector Group",
          "hd": false
        },
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ix": 1,
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
                  "v": [[-8, 8], [8, 8], [8, 50], [-8, 50]],
                  "c": false
                }
              }
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [1, 0.8, 0, 1]},
              "o": {"a": 0, "k": 100},
              "r": 1,
              "bm": 0,
              "nm": "Body",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5}
            }
          ],
          "nm": "Body",
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ]
    }
  ]
};

// House with Person Animation
const houseAnimation = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 150,
  "w": 400,
  "h": 400,
  "nm": "House with Person",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "House",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 0, "k": 0},
        "p": {"a": 0, "k": [200, 200, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ix": 1,
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  "v": [[0, -80], [60, -20], [60, 80], [-60, 80], [-60, -20]],
                  "c": false
                }
              }
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [1, 0.8, 0, 1]},
              "o": {"a": 0, "k": 100},
              "r": 1,
              "bm": 0,
              "nm": "House",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5}
            }
          ],
          "nm": "House",
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ]
    },
    {
      "ddd": 0,
      "ind": 2,
      "ty": 4,
      "nm": "Person",
      "sr": 1,
      "ks": {
        "o": {
          "a": 1,
          "k": [
            {"i": {"x": [0.833], "y": [0.833]}, "o": {"x": [0.167], "y": [0.167]}, "t": 0, "s": [0]},
            {"t": 75, "s": [100]},
            {"t": 150, "s": [100]}
          ]
        },
        "r": {"a": 0, "k": 0},
        "p": {"a": 0, "k": [200, 200, 0]},
        "a": {"a": 0, "k": [0, 0, 0]},
        "s": {"a": 0, "k": [100, 100, 100]}
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ix": 1,
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  "v": [[0, -30], [10, -23], [13, -12], [10, -1], [0, 6], [-10, -1], [-13, -12], [-10, -23]],
                  "c": false
                }
              }
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.95, 0.8, 0.6, 1]},
              "o": {"a": 0, "k": 100},
              "r": 1,
              "bm": 0,
              "nm": "Head",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5}
            }
          ],
          "nm": "Head",
          "mn": "ADBE Vector Group",
          "hd": false
        },
        {
          "ty": "gr",
          "it": [
            {
              "ind": 0,
              "ty": "sh",
              "ix": 1,
              "ks": {
                "a": 0,
                "k": {
                  "i": [[0, 0], [0, 0], [0, 0], [0, 0]],
                  "o": [[0, 0], [0, 0], [0, 0], [0, 0]],
                  "v": [[-5, 6], [5, 6], [5, 35], [-5, 35]],
                  "c": false
                }
              }
            },
            {
              "ty": "fl",
              "c": {"a": 0, "k": [0.2, 0.4, 0.8, 1]},
              "o": {"a": 0, "k": 100},
              "r": 1,
              "bm": 0,
              "nm": "Body",
              "mn": "ADBE Vector Graphic - Fill",
              "hd": false
            },
            {
              "ty": "tr",
              "p": {"a": 0, "k": [0, 0], "ix": 2},
              "a": {"a": 0, "k": [0, 0], "ix": 1},
              "s": {"a": 0, "k": [100, 100], "ix": 3},
              "r": {"a": 0, "k": 0, "ix": 6},
              "o": {"a": 0, "k": 100, "ix": 7},
              "sk": {"a": 0, "k": 0, "ix": 4},
              "sa": {"a": 0, "k": 0, "ix": 5}
            }
          ],
          "nm": "Body",
          "mn": "ADBE Vector Group",
          "hd": false
        }
      ]
    }
  ]
};

interface LottieAnimationProps {
  type: 'realEstate' | 'success' | 'loading' | 'house';
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

export const LottieAnimation = ({ 
  type, 
  className = "", 
  loop = true, 
  autoplay = true,
  style = {}
}: LottieAnimationProps) => {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current && autoplay) {
      lottieRef.current.play();
    }
  }, [autoplay]);

  const getAnimationData = () => {
    switch (type) {
      case 'realEstate':
        return realEstateAnimation;
      case 'success':
        return successAnimation;
      case 'loading':
        return loadingAnimation;
      case 'house':
        return houseAnimation;
      default:
        return successAnimation;
    }
  };

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={getAnimationData()}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
    />
  );
};

// Enhanced Hero Background Animation Component
export const HeroAnimation = () => {
  return (
    <div className="absolute inset-0 opacity-50 pointer-events-none">
      <div className="absolute top-20 left-20 w-64 h-64">
        <LottieAnimation type="realEstate" className="w-full h-full" />
      </div>
      <div className="absolute top-32 right-32 w-56 h-56">
        <LottieAnimation type="success" className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 left-1/3 w-48 h-48">
        <LottieAnimation type="loading" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-1/4 w-60 h-60">
        <LottieAnimation type="house" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72">
        <LottieAnimation type="realEstate" className="w-full h-full" />
      </div>
    </div>
  );
};

// Enhanced Floating Decorative Animation Component
export const FloatingAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 animate-float-slow">
        <div className="w-full h-full bg-yellow-400/50 rounded-full border-4 border-yellow-500/70 shadow-lg"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 w-28 h-28 animate-float-delayed">
        <div className="w-full h-full bg-yellow-500/50 rounded-full border-4 border-yellow-600/70 shadow-lg"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 animate-float">
        <div className="w-full h-full bg-yellow-300/50 rounded-full border-4 border-yellow-400/70 shadow-lg"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/3 w-36 h-36 animate-float-slow">
        <div className="w-full h-full bg-yellow-400/50 rounded-full border-4 border-yellow-500/70 shadow-lg"></div>
      </div>
      <div className="absolute top-1/2 left-1/6 w-24 h-24 animate-float-delayed">
        <div className="w-full h-full bg-yellow-500/50 rounded-full border-4 border-yellow-600/70 shadow-lg"></div>
      </div>
      <div className="absolute bottom-1/2 right-1/6 w-28 h-28 animate-float">
        <div className="w-full h-full bg-yellow-300/50 rounded-full border-4 border-yellow-400/70 shadow-lg"></div>
      </div>
    </div>
  );
};

// Enhanced Success Modal Animation Component
export const SuccessAnimation = ({ show = false }: { show?: boolean }) => {
  if (!show) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="bg-white rounded-lg p-8 shadow-2xl animate-bounce-in">
        <LottieAnimation type="success" className="w-48 h-48" loop={false} />
        <p className="text-center mt-4 text-lg font-semibold">Success!</p>
      </div>
    </div>
  );
};

// Enhanced Icon Badge Animation Component
export const IconBadgeAnimation = ({ type = 'success', size = 'small' }: { type?: 'success' | 'loading', size?: 'small' | 'medium' }) => {
  const sizeClass = size === 'small' ? 'w-16 h-16' : 'w-20 h-20';
  
  return (
    <div className={`absolute -top-3 -right-3 ${sizeClass}`}>
      <LottieAnimation type={type} className="w-full h-full" />
    </div>
  );
};

export default LottieAnimation;
