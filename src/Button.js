import { useState } from 'react';

function Button( { text } ) {
    const [nrofClicks, setNrOfClicks] = useState(0);

    const onClickEvent = () => {
        setNrOfClicks(nrofClicks + 1);
    };
    return (
        <button onClick={onClickEvent} className="cici"> {text || 'default button'} {nrofClicks}</button>
    );
}

export const example = "here is an exemple";

export default Button