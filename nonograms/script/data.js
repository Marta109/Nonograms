export const gameData = {
  "Easy - 5x5": {
    tower: {
      solution: [
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0],
      ],
      top: {
        0: [2],
        1: [4],
        2: [3, 1],
        3: [4],
        4: [2],
      },
      left: {
        0: [1, 1, 1],
        1: [5],
        2: [3],
        3: [1, 1],
        4: [3],
      },
    },
    airplane: {
      solution: [
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
      ],
      top: {
        0: [1],
        1: [2, 1],
        2: [5],
        3: [2, 1],
        4: [1],
      },
      left: {
        0: [1],
        1: [3],
        2: [5],
        3: [1],
        4: [3],
      },
    },
    cross: {
      solution: [
        [0, 1, 1, 1, 0],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0],
      ],
      top: {
        0: [3],
        1: [2, 2],
        2: [1, 1],
        3: [2, 2],
        4: [3],
      },
      left: {
        0: [3],
        1: [2, 2],
        2: [1, 1],
        3: [2, 2],
        4: [3],
      },
    },
    smiley: {
      solution: [
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
      ],
      top: {
        0: [2, 1],
        1: [2, 1],
        2: [1],
        3: [2, 1],
        4: [2, 1],
      },
      left: {
        0: [2, 2],
        1: [2, 2],
        2: [],
        3: [1, 1],
        4: [3],
      },
    },
    sunshine: {
      solution: [
        [1, 0, 0, 1, 1],
        [1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1],
        [1, 1, 0, 0, 1],
      ],
      top: {
        0: [2, 1],
        1: [4],
        2: [1, 1],
        3: [4],
        4: [2, 1],
      },
      left: {
        0: [1, 2],
        1: [4],
        2: [1, 1],
        3: [4],
        4: [2, 1],
      },
    },
  },
  "Medium  - 10x10": {
    "question mark": {
      solution: [
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      ],
      top: {
        0: [],
        1: [2],
        2: [3],
        3: [1],
        4: [1, 2, 2],
        5: [1, 2, 2],
        6: [1, 2],
        7: [6],
        8: [4],
        9: [],
      },
      left: {
        0: [6],
        1: [2, 2],
        2: [2, 2],
        3: [2],
        4: [3],
        5: [4],
        6: [2],
        7: [],
        8: [2],
        9: [2],
      },
    },
    tree: {
      solution: [
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ],
      top: {
        0: [3, 1],
        1: [5, 2],
        2: [3, 2, 1],
        3: [4, 1, 1],
        4: [10],
        5: [1, 7],
        6: [3, 1, 1, 1],
        7: [3, 1, 1],
        8: [4, 1],
        9: [2, 2],
      },
      left: {
        0: [6],
        1: [4, 3],
        2: [5, 4],
        3: [2, 3, 2],
        4: [3, 5],
        5: [5],
        6: [3],
        7: [2],
        8: [1, 2, 1],
        9: [10],
      },
    },
    tv: {
      solution: [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      ],
      top: {
        0: [7],
        1: [1, 1, 4],
        2: [1, 7],
        3: [3, 2],
        4: [1, 1],
        5: [1, 1],
        6: [2, 1],
        7: [1, 1, 1],
        8: [2, 3],
        9: [7],
      },
      left: {
        0: [1, 1],
        1: [1, 1],
        2: [10],
        3: [1, 2, 2],
        4: [3, 1],
        5: [1, 1, 1],
        6: [3, 1],
        7: [4, 2],
        8: [10],
        9: [1, 1],
      },
    },
    snail: {
      solution: [
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      ],
      top: {
        0: [6, 1],
        1: [2, 6],
        2: [10],
        3: [1, 8],
        4: [2, 2, 4],
        5: [3, 5],
        6: [6, 2],
        7: [3, 2],
        8: [1, 2],
        9: [2],
      },
      left: {
        0: [4],
        1: [2, 3],
        2: [4, 3],
        3: [1, 3, 2],
        4: [5, 2],
        5: [4, 2],
        6: [7, 1],
        7: [6, 1],
        8: [9],
        9: [9],
      },
    },
    music: {
      solution: [
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      ],
      top: {
        0: [2],
        1: [4],
        2: [4],
        3: [8],
        4: [1, 1],
        5: [1, 1],
        6: [1, 1, 2],
        7: [1, 1, 4],
        8: [1, 1, 4],
        9: [8],
      },
      left: {
        0: [4],
        1: [3, 1],
        2: [1, 3],
        3: [4, 1],
        4: [1, 1],
        5: [1, 3],
        6: [3, 4],
        7: [4, 4],
        8: [4, 2],
        9: [2],
      },
    },
  },
  "Hard  - 15x15": {
    duck: {
      solution: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      ],
      top: {
        0: [3],
        1: [4],
        2: [5],
        3: [4],
        4: [5],
        5: [6],
        6: [3, 2, 1],
        7: [2, 2, 5],
        8: [4, 2, 6],
        9: [8, 2, 3],
        10: [8, 2, 1, 1],
        11: [2, 6, 2, 1],
        12: [4, 6],
        13: [2, 4],
        14: [1],
      },
      left: {
        0: [3],
        1: [5],
        2: [4, 3],
        3: [7],
        4: [5],
        5: [3],
        6: [5],
        7: [1, 8],
        8: [3, 3, 3],
        9: [7, 3, 2],
        10: [5, 4, 2],
        11: [8, 2],
        12: [10],
        13: [2, 3],
        14: [6],
      },
    },
    clover: {
      solution: [
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      top: {
        0: [2, 7],
        1: [7],
        2: [7, 2],
        3: [7, 2],
        4: [3, 5, 1],
        5: [5, 3, 2],
        6: [6, 1, 2],
        7: [6, 4],
        8: [6, 1],
        9: [5, 3],
        10: [3, 5],
        11: [7],
        12: [7],
        13: [7],
        14: [2, 2],
      },
      left: {
        0: [2, 2],
        1: [7],
        2: [7],
        3: [7],
        4: [3, 5, 3],
        5: [5, 3, 5],
        6: [6, 1, 6],
        7: [6, 6],
        8: [6, 1, 6],
        9: [5, 1, 5],
        10: [3, 1, 3],
        11: [2],
        12: [2],
        13: [4],
        14: [2],
      },
    },
    spades: {
      solution: [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      ],
      top: {
        0: [4],
        1: [7],
        2: [8],
        3: [9],
        4: [10],
        5: [10, 1],
        6: [10, 2],
        7: [15],
        8: [10, 2],
        9: [10, 1],
        10: [10],
        11: [9],
        12: [8],
        13: [7],
        14: [4],
      },
      left: {
        0: [1],
        1: [3],
        2: [5],
        3: [7],
        4: [9],
        5: [11],
        6: [13],
        7: [13],
        8: [15],
        9: [15],
        10: [15],
        11: [6, 1, 6],
        12: [4, 1, 4],
        13: [3],
        14: [5],
      },
    },
    hatchet: {
      solution: [
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
      top: {
        0: [2],
        1: [3],
        2: [3],
        3: [3],
        4: [4, 3],
        5: [5, 3],
        6: [2, 2, 3],
        7: [1, 3, 3],
        8: [4, 3],
        9: [7, 2],
        10: [3, 4],
        11: [9],
        12: [3, 6],
        13: [2, 5],
        14: [4],
      },
      left: {
        0: [4],
        1: [2, 2, 2],
        2: [2, 3, 3],
        3: [9],
        4: [4, 3],
        5: [2, 7],
        6: [3, 4],
        7: [3, 5],
        8: [3, 5],
        9: [3, 5],
        10: [3, 4],
        11: [3],
        12: [3],
        13: [3],
        14: [2],
      },
    },
    robot: {
      solution: [
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      ],
      top: {
        0: [6],
        1: [2],
        2: [3],
        3: [2, 6],
        4: [5, 6],
        5: [1, 1, 6],
        6: [1, 1, 11],
        7: [1, 1, 11],
        8: [1, 1, 11],
        9: [1, 1, 6],
        10: [5, 6],
        11: [2, 6],
        12: [3],
        13: [2],
        14: [6],
      },
      left: {
        0: [7],
        1: [2, 2],
        2: [2, 3, 2],
        3: [1, 1],
        4: [7],
        5: [3],
        6: [15],
        7: [15],
        8: [1, 11, 1],
        9: [1, 9, 1],
        10: [1, 9, 1],
        11: [1, 9, 1],
        12: [3],
        13: [3],
        14: [3],
      },
    },
  },
};