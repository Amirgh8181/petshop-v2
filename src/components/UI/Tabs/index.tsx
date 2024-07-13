import React from 'react'

export interface TabsProps {
    head: string,
    content: string
}

const Tabs = ({ renderData }: { renderData: TabsProps[] }) => {
    console.log(renderData);

    return (
        <div role="tablist" className="tabs tabs-lifted">
            {renderData.map((tab, index) =>
                <>
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label={tab.head} defaultChecked={index === 0 && true} />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        {tab.content}
                    </div>
                </>
            )}
        </div>
    )
}

export default Tabs