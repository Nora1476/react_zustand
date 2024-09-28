import Header from "../../layout/Header";
import {Footer} from "../../layout/Footer";
import MemoBoard from "./MemoBoard";
import {useMemoStore} from "../../../store/useMemoStore";
import MemoElem from "./MemoElem";
import MemoInput from "./MemoInput";

export const Page2 = () => {
    const { memoList } = useMemoStore();

    return (
        <>
            <Header/>
            <MemoBoard>
                {memoList.length ? (
                    memoList.map((item) => {
                        return(
                          <MemoElem key={item.id} id={item.id}>
                              {item.content}
                          </MemoElem>
                        );
                    })
                ) : (
                 <span> 메모를 입력해 주세요 </span>
                )}
            </MemoBoard>
            <MemoInput/>
            <Footer/>
        </>
    )
}