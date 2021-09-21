import React, { useState, useEffect } from 'react';
import { BlockPicker } from 'react-color';

export default function ColorBlock(props) {
  const defaultPickerWidth = 220;
  const defaultPickerHeight = 300;

  const containerStyle = {
    display: 'inline-block',
    width: props.width || 25,
    height: props.height || 25,
    position: 'relative',
  };

  const [picker, setPicker] = useState(false);

  const [pickerPos, setPickerPos] = useState({
    left: containerStyle.width,
    top: 0,
  });

  useEffect(() => {
    document.addEventListener('click', hidePicker);
    return () => {
      document.removeEventListener('click', hidePicker);
    };
  });

  const blockStyle = {
    backgroundColor: props.color,
    width: '100%',
    height: '100%',
    boxShadow: '0px 0px 0px 3px #E4E4E4',
  };

  const pickerStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    left: pickerPos.left / 2 + containerStyle.width / 2,
    top: pickerPos.bottom,
    display: picker ? 'block' : 'none',
    boxShadow: '0px 2px 20px -10px #888',
  };

  const onClickBlock = (e) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    let left = 0;
    let top = 0;

    if (width - clientX < containerStyle.width + defaultPickerWidth) {
      left = -defaultPickerWidth;
    } else {
      left = containerStyle.width;
    }

    if (height - clientY < defaultPickerHeight) {
      top = height - clientY - defaultPickerHeight;
    } else {
      top = 0;
    }

    setPickerPos({ left, top });
    doPrevent(e);
    setPicker(true);
  };

  const doPrevent = (e) => {
    e.nativeEvent.stopImmediatePropagation();
  };

  const hidePicker = (e) => {
    setPicker(false);
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={blockStyle} onClick={onClickBlock}></div>
        <div style={pickerStyle} onClick={doPrevent}>
          <BlockPicker
            width={defaultPickerWidth}
            color={props.color}
            onChange={props.onChange}
          />
        </div>
      </div>
    </>
  );
}
