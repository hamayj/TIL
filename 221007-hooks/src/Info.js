import React, { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        // console.log("렌더링이 완료되었습니다.");
        // console.log(
        //     name,nickname
        // );
        // console.log("마운트 될 때만 실행됩니다.");
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    }, []); // 왜 {} 처리 한걸까? 벗겨서 또 확인해보자.
    // {} 각각의 변수를 담은 객체로 처리해서 보여주겠다. (키:값 형태)
    // 마운트 될 때만 실행하고 싶을 때는 useEffect의 두번째 파라미터로 빈 배열 넣어주면 됨.
    // 배열 안에는 useState를 통해 관리하고 있는 상태를 넣어줘도 되고, props

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임 :</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;