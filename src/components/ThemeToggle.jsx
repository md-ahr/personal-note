import { ToggleWrapper, Label, Input } from '../styles/Header';
import { useGlobalState, useGlobalDispatch } from '../context/noteContext';

const ThemeToggle = () => {

    const { theme } = useGlobalState();
    const dispatch = useGlobalDispatch();

    const handleSwitch = (e) => {
        if (e.target.checked) {
            dispatch({ type: 'theme', mode: 'dark' });
        } else {
            dispatch({ type: 'theme', mode: 'light' });
        }
        console.log(theme);
    };

    return (
        <ToggleWrapper className="form-check form-switch">
            <Label htmlFor="flexSwitchCheckChecked" className="fw-bold">Day / Night</Label>
            <Input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={handleSwitch} />
        </ToggleWrapper>
    );

};

export default ThemeToggle;
