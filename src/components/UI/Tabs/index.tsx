import React from 'react'

export interface TabsProps {
    head: string,
    content: string
}

const Tabs = ({ renderData }: { renderData: TabsProps[] }) => {

    return (
        <div role="tablist" className="tabs tabs-lifted">
            {renderData.map((tab, index) =>
                <>
                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab [--tab-bg:#2EAECC] [--tab-border-color:#2EAECC] dark:[--tab-bg:#00334C] dark:[--tab-border-color:#00334C] text-nowrap"
                        aria-label={tab.head}
                        defaultChecked={index === 0 && true}
                    />
                    <div
                        role="tabpanel"
                        className="tab-content border-primary rounded-box p-6"
                    >
                        {tab.content}
                    </div>
                </>
            )}
        </div>
    )
}

export default Tabs