import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { InfoContext } from '../../Store/InfoContext';

const View1 = () => {
    const context = useContext(InfoContext)

    const addCount = () => {
        context.onAddCount()
    }
    const changeInfo = () => {
        context.onChangeInfo("")
    }

    return (
        <div>
            {context.count}
            <Button variant="primary" onClick={(addCount)}> Add</Button>
            {context.info}
            <Button variant="primary" onClick={() => context.onChangeInfo('View2')}> Testando</Button>
        </div>
    );
};

export default View1;