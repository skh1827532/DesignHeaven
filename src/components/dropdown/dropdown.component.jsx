import React from "react";
import Multiselect from 'multiselect-react-dropdown';

export const DropDown = (props) => {
    return (
        <Multiselect
            displayValue="key"
            onKeyPressFn={function noRefCheck() { }}
            onRemove={function noRefCheck(selectedList) {
                props.setlogo(selectedList)
             }}
            onSearch={function noRefCheck() { }}
            onSelect={function noRefCheck(selectedList) {
                props.setlogo(selectedList)
             }}
            options={[
                {
                    cat: 'Group 1',
                    key: 'Logo Design'
                },
                {
                    cat: 'Group 1',
                    key: `Ads Design`
                },
                {
                    cat: 'Group 1',
                    key: 'Illustration'
                },
                {
                    cat: 'Group 2',
                    key: 'Publication'
                },
                {
                    cat: 'Group 2',
                    key: 'Typography'
                },
                {
                    cat: 'Group 2',
                    key: 'Prototype'
                },
                {
                    cat: 'Group 2',
                    key: 'Art Design'
                }
            ]}
            placeholder="Select from dropdown"
            style={{
                multiselectContainer: { 
                    'width':'100%'
                  },
                chips: {
                    'backgroundColor': '#73E0A9',
                    'color': '#000000',
                },
                
                option: {
                    'color': '#000000',
                    'fontSize':'1.4rem',
                    'fontWeight':'500',
                },
                searchBox: {
                    'color': '#000000',
                    'fontSize':'1.4rem',
                    'fontWeight':'600',
                    'border': '2px solid #73E0A9',
                    'borderRadius': '.4rem'
                },
                inputField: { 
                    'fontSize':'1.4rem',
                    'fontWeight':'600',
                    'color': '#000000',
                },
            }}
            selectionLimit={3}
            showArrow={true}
        />
    )
}