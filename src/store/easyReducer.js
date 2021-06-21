const dataSet = {
    chooseMatrix() {
        return Math.floor(Math.random() * this.optionMatrix.length);
    },
    optionMatrix: [
        [
            [
                [1, 2, 3, 5, 4, 6],
                [6, 5, 4, 3, 1, 2],
                [2, 6, 1, 4, 5, 3],
                [4, 3, 5, 6, 2, 1],
                [3, 4, 2, 1, 6, 5],
                [5, 1, 6, 2, 3, 4],
            ],
            [
                [0, 2, 3, 0, 4, 6],
                [0, 5, 4, 3, 1, 2],
                [2, 6, 1, 0, 0, 0],
                [0, 3, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0],
                [5, 0, 0, 0, 0, 4],
            ],
        ],
        [
            [
                [1, 2, 3, 5, 4, 6],
                [6, 5, 4, 3, 1, 2],
                [2, 6, 1, 4, 5, 3],
                [4, 3, 5, 6, 2, 1],
                [3, 4, 2, 1, 6, 5],
                [5, 1, 6, 2, 3, 4],
            ],
            [
                [0, 2, 3, 0, 4, 6],
                [0, 5, 4, 3, 1, 2],
                [2, 6, 1, 0, 0, 0],
                [0, 3, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0],
                [5, 0, 0, 0, 0, 4],
            ],
        ],
        [
            [
                [1, 2, 3, 5, 4, 6],
                [6, 5, 4, 3, 1, 2],
                [2, 6, 1, 4, 5, 3],
                [4, 3, 5, 6, 2, 1],
                [3, 4, 2, 1, 6, 5],
                [5, 1, 6, 2, 3, 4],
            ],
            [
                [0, 2, 3, 0, 4, 6],
                [0, 5, 4, 3, 1, 2],
                [2, 6, 1, 0, 0, 0],
                [0, 3, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0],
                [5, 0, 0, 0, 0, 4],
            ],
        ]
    ]
}
const initialState = {
    matrix: {}
}

const randomChoose = (state, dataSet) => {
    let randomOption = dataSet.chooseMatrix();
    let start = JSON.stringify(dataSet.optionMatrix[randomOption][1]);
    start = JSON.parse(start);
    let end = JSON.stringify(dataSet.optionMatrix[randomOption][0]);
    end = JSON.parse(end);
    return {
        ...state,
        matrix:{
            ...state.matrix,
            start,
            end
        }
    }
}

const easyReducer = (state = initialState, action) => {
    return randomChoose(state, dataSet);
}
export default easyReducer;