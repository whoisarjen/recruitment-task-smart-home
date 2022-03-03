import { useEffect } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { SmartDeviceAny } from '../../interfaces/device.interface';
import { closeDialog } from '../../redux/slices/device.slice';
import Fade from '@mui/material/Fade';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const width = 350;
const height = 200;

const Box = styled.div`
    position: fixed;
    z-index: 10000;
    left: calc(50% - ${width / 2}px);
    top: calc(50% - ${height / 2}px);
    transform: translate(-50%,-50%);
    width: ${width}px;
    max-width: 90%;
    min-height: ${height}px;
    background: #fff;
    border-radius: 8px;
    padding: 10px;
    box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
    cursor: pointer;
`

const DialogDraggableDevice = () => {
    const dispatch = useAppDispatch()
    const dialog = useAppSelector(state => state.device.dialog)

    useEffect(() => {
        const element: any = document.querySelector('#dialog')

        element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`
        element.style.top = `calc(50% - ${element.offsetHeight / 2}px)`

        window.addEventListener('resize', () => {
            element.style.left = `calc(50% - ${element.offsetWidth / 2}px)`
            element.style.top = `calc(50% - ${element.offsetHeight / 2}px)`
        })

        return;
    }, [])

    useEffect(() => {
        const element: any = document.querySelector('#dialog')

        if (dialog) {
            element.style.display = `block`
        } else {
            element.style.display = `none`
        }
    }, [dialog])

    return (
        <Draggable cancel="#button_close">
            <Fade in={dialog ? true : false}>
                <Box id="dialog">
                    <DialogTitle id="dialog-title">
                        {dialog && dialog.name}
                    </DialogTitle>
                    <DialogContent>
                        {
                            dialog && Object.keys(dialog).map((key: any) =>
                                <DialogContentText key={key}>
                                    {key}: {dialog[key as keyof SmartDeviceAny].toString()}
                                </DialogContentText>
                            )
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button id="button_close" onClick={() => dispatch(closeDialog())}>Close</Button>
                    </DialogActions>
                </Box>
            </Fade>
        </Draggable >
    )
}

export default DialogDraggableDevice;