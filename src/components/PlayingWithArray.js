import React, { useEffect } from 'react'

const PlayingWithArray = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const getArrayData = () => {
        const data = array.map((item) => {
            return item;
        })
        console.log(data);
        return data;
    }
    // const res = array.filter(getArrayFilteredData);
    // const getArrayFilteredData = (array) => {
    //     return array >= 5 ;
    // }
    const getArrayFilteredData = () => {
        const res = array.filter((item) => {
            return item > 5;
        })
        return res;
    }

    useEffect(() => {
        array.forEach((item) => {
            console.log(item);
        });
    }, [array])//dependency array
  return (
    <>
    <div>PlayingWithArray</div>
    <div>
        {getArrayData()}
        {/* {array.map((item) => {
        return <p>{item * item}</p>
    })} */}
    </div>
    <div>{getArrayFilteredData()}</div>
    </>
  )
}

export default PlayingWithArray;