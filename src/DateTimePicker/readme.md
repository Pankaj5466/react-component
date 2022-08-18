DatePicker using bootstrap + js: https://www.youtube.com/watch?v=8ptKpzW-KLo
DateTimePicker : https://www.youtube.com/watch?v=weOHpT2w1Bg


Above uses js code in React, which is not recommended, as both React and js can try to update the DOM Simultaneouly.

======

List of DateTime Picker available in React:
https://www.youtube.com/watch?v=k0zQzVR4lJ8

==Steps==
Source: https://www.npmjs.com/package/react-datepicker
Main Demo Site: https://reactdatepicker.com/#example-calendar-container

Some usefule Component:

- https://reactdatepicker.com/#example-input-time
- https://reactdatepicker.com/#example-select-time

Step1: Install `npm install react-datepicker --save`

Step2: Create File MyDateTimePicker.jsx

Step3: Import
```
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
```

Step4:
Create Component as per Source Page
