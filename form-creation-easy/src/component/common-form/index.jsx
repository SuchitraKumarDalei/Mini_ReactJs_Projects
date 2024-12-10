import CommonInput from "../common-input";

const formTypes
    = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea',
}

export default function CommonForm({ formControls = [], formData, setFormData,buttonText,onHandleSubmit }) {

    function renderFormElement(getCurrentElement) {
        let content = null;

        switch (getCurrentElement?.compnenentType) {
            case formTypes.INPUT:
                content = (<CommonInput label={getCurrentElement.label} id={getCurrentElement.id} value={formData[getCurrentElement.name]} placeholder={getCurrentElement.placeholder} type={getCurrentElement.type} name={getCurrentElement.name}
                    onChange={(event) => setFormData({
                        ...formData,
                        [event.target.name]:event.target.value
                    })
                    } />);
                break;

            default:
                content = (<CommonInput label={getCurrentElement.label} id={getCurrentElement.id} value={formData[getCurrentElement.name]} placeholder={getCurrentElement.placeholder} type={getCurrentElement.type} name={getCurrentElement.name}
                    onChange={(event) => setFormData({
                        ...formData,
                        [event.target.name]:event.target.value
                    })
                    } />);
                break;
        }
        return content;
    }

    return (
        <form onSubmit={onHandleSubmit}>
            {
                formControls?.length ?
                    formControls.map((singleFormElementsItem) =>
                        renderFormElement(singleFormElementsItem)
                    ) : null}
                { 
                    <div style={{marginTop:'12px'}}>
                        <button type="submit">{buttonText || 'Submit'}</button>
                    </div>
                }        
        </form>
    );
}