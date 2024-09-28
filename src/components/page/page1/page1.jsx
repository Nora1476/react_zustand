import {useCountStore} from "../../../store/useCountStore";
import BtnBasic from "../../button/BtnBasic";
import {useBoolStore} from "../../../store/useBoolStore";

export const Page1 = () => {
    const {counter, addCount, substractCount} = useCountStore()
    const {bool, setBoolToggle} = useBoolStore()

    return (
        <>
            <main>
                <div>
                    <h4>zustand _ count</h4>
                    <div>
                        <p>
                            count {counter}
                            <BtnBasic onClick={addCount}> + </BtnBasic>
                            <BtnBasic onClick={substractCount}> - </BtnBasic>
                        </p>
                    </div>
                </div>
                <div>
                    <h4>zustand _ Bool</h4>
                    <div>
                        <p>
                            currentState {bool ? "true" : "false"}
                            <BtnBasic onClick={setBoolToggle}> change </BtnBasic>
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}