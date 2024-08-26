"use client"

interface radio {
    Score: number,
    title: string,
    number: number,
    handleQuestion: (arg: number) => void
}

export const CustomRadio = ({ Score, title, number, handleQuestion }: radio) => {


    return (
        <button onClick={() => handleQuestion(Score)}
            className="btn w-full h-auto glass bg-primary/40 flex justify-start p-2"
        >
            <span className="w-10 aspect-square rounded-full flex justify-center items-center bg-white
             text-petBlue border-2 border-petBlue"
            >
                {number}
            </span>
            <span className="xl:text-xl md:text-lg text-sm">
                {title}
            </span>

        </button>
    );
};