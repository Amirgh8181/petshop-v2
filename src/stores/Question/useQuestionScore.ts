import { create } from "zustand";
import { persist } from "zustand/middleware";


// Define the interface of the Cart state
interface State {
    QuestionScore: number,
    QuestionState: { [key: number]: { value: number } },
    QuestionNumber: number,

    setQuestionState: (questionValue: number) => void;
    setQuestionFinalScore: () => void;
    setStartQuestion: () => void
    setRefreshQuestion: () => void
}

interface initialData {
    QuestionScore: { [key: number]: { value: number } }
}

const INITIAL_STATE: initialData = {
    QuestionScore: {
        1: { value: 0 },
        2: { value: 0 },
        3: { value: 0 },
        4: { value: 0 },
        5: { value: 0 },
        6: { value: 0 },
        7: { value: 0 },
        8: { value: 0 },
        9: { value: 0 },
        10: { value: 0 },
        11: { value: 0 },
        12: { value: 0 },
        13: { value: 0 },
        14: { value: 0 },
        15: { value: 0 },
        16: { value: 0 },
        17: { value: 0 },
        18: { value: 0 },
        19: { value: 0 },
        20: { value: 0 },
    }

}

// Create the store with Zustand, combining the status interface and actions
export const useQuestionScore = create<State>()(
    persist(
        (set) => ({
            QuestionScore: 0,
            QuestionState: INITIAL_STATE.QuestionScore,
            QuestionNumber: 0,
            setRefreshQuestion() {
                set({
                    QuestionNumber: 0
                })
            },
            setStartQuestion() {
                let stateNumber = useQuestionScore.getState().QuestionNumber
                set({
                    QuestionNumber: stateNumber + 1
                })
            },
            setQuestionState: (questionValue) => {
                const questionStateClone = useQuestionScore.getState().QuestionState;
                let stateNumber = useQuestionScore.getState().QuestionNumber
                questionStateClone[stateNumber].value = questionValue

                console.log(questionStateClone);
                console.log(stateNumber);
                console.log(questionStateClone);

                set({
                    QuestionState: { ...questionStateClone },
                    QuestionNumber: stateNumber + 1
                })
            },


            setQuestionFinalScore: () => {
                const questionStateClone = useQuestionScore.getState().QuestionState;
                let counter: number = 0
                for (const i in questionStateClone) {
                    counter += questionStateClone[i].value
                }
                set({
                    QuestionScore: counter
                })
            }
        }),
        {
            name: "QuestionScore"
        }
    )
)

