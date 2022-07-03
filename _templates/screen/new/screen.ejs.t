---
to: src/screens/<%= name %>/index.tsx
---
import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import withViewModel from '../../Core/withViewModel';
import <%= name %>ViewModel, { <%= name %>ViewModelState } from './<%= name %>ViewModel';


export interface T<%= name %>Props extends <%= name %>ViewModelState { }

const <%= name %>: React.FC<T<%= name %>Props> = (props) => {

    const classes = useStyles({})

    return (
        <div>
             <%= name %>
        </div>
    )
}

const useStyles = makeStyles<Theme, any>((theme: Theme) => createStyles({

}))

export default withViewModel(<%= name %>, new <%= name %>ViewModel())


