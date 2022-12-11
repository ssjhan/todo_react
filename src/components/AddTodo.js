import React, {useState} from 'react';
import {TextField, Paper, Button, Grid} from "@mui/material";

function AddTodo({add}) { // { add }

    // 사용자의 입력을 저장할 객체
    const [item, setItem] = useState({ title : '' })

    //입력창에 값이 변할 때마다 item 객체안에 title값 자동  저장
    const changeHandler = e => {
      // console.log('체인지 이벤트 터졌쓰~ ');
      // console.log(e.target.value);
      setItem({title : e.target.value });
    };

    //입력 버튼 클릭 이벤트
    const addClickHandler = e => {
      // console.log('버튼 클릭!!');
      add(item);
      setItem({title : ''});

    };

    const enterHandler = e => {
      if(e.key === 'Enter'){
          addClickHandler();
      }
      console.log(e.key);

    };



    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                    <TextField
                     placeholder="Add Todo Here" 
                     fullWidth 
                    onChange={changeHandler}
                    onKeyUp={enterHandler}
                     />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button 
                    fullWidth color="secondary" 
                    variant="outlined"
                    onClick={addClickHandler} //버튼에서 함수 호출시 이름만 명시
                    >
                        +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AddTodo;