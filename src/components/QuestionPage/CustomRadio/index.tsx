"use client"

interface radio {
    Score: number,
    title: string,
    number: number,
    handleQuestion: (arg: number) => void
}

export const CustomRadio = ({ Score, title, number, handleQuestion }: radio) => {


    return (
        <div onClick={() => handleQuestion(Score)}
            className="w-full glass bg-primary/40 hover:bg-primary/60 flex justify-start items-center p-2 rounded-full cursor-pointer"
        >
            <span className="w-10 aspect-square rounded-full flex justify-center items-center bg-white
             text-petBlue border-2 border-petBlue "
            >
                {number}
            </span>
            <span className="xl:text-xl md:text-base text-sm text-wrap text-start mx-1">
                {title}
            </span>

        </div>
    );
};