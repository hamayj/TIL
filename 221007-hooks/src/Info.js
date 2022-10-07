import React, { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log("렌더링이 완료되었습니다.");
        console.log(
            name,nickname
        );
    }); // 왜 {} 처리 한걸까? 벗겨서 또 확인해보자.
    // {} 각각의 변수를 담은 객체로 처리해서 보여주겠다. (키:값 형태)


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