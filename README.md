# h5next

##deployment

install git  
`sudo apt-get install git`

install node  
`sudo apt-get install nodejs`

install npm  
`sudo apt-get install npm`

.mt-checkbox,
.mt-radio {
    display: inline-block;
    cursor: pointer;
}

.mt-checkbox input,
.mt-radio input {
    display: none;
}

.mt-checkbox .label,
.mt-radio .label {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
}

.mt-checkbox .label:before,
.mt-radio .label:before {
    content: '';
    display: inline-block;
    vertical-align: inherit;
    color: #fff;
    width: 20px;
    height: 20px;
    margin: 0;
    margin-right: 5px;
    line-height: 20px;
    text-align: center;
    border: 2px solid #26a69a;
    font-family: Arial;
    padding: 0;
    position: relative;
    box-sizing: border-box;
}

.mt-checkbox .label:before {
    border-radius: 2px;
    font-size: 14px;
    line-height: 16px;
}

.mt-radio .label:before {
    border-radius: 50%;
    font-size: 30px;
    line-height: calc(50% + 2px);
}

.mt-checkbox input:checked + .label:before {
    content: '\2713';
    background-color: #26a69a;
}

.mt-radio input:checked + .label:before {
    border-width: 5px;
}

.mt-checkbox input + .label:before {
     -webkit-transition: all 0.3s ease-out;
     -moz-transition: all 0.3s ease-out;
     -o-transition: all 0.3s ease-out;
     transition: all 0.3s ease-out;
}

.mt-radio input + .label:before {
     -webkit-transition: all 0.1s ease-out;
     -moz-transition: all 0.1s ease-out;
     -o-transition: all 0.1s ease-out;
     transition: all 0.1s ease-out;
}

.mt-button {
    cursor: pointer;
    display: inline-block;
    color: #fff;
    padding: 10px 20px;
    background-color: #26a69a;
}

.mt-button:active {
    opacity: 0.7;
}

.mt-input {
    position: relative;
}

.mt-input input {
    display: block;
    border: none;
    outline: none;
    border-bottom: 2px solid #eee;
}

.mt-input .label {
    position: absolute;
    display: block;
    left: 0;
    top: 0;
}

.mt-input input:focus {
    border-color: #26a69a;

     -webkit-transition: all 0.3s ease-out;
     -moz-transition: all 0.3s ease-out;
     -o-transition: all 0.3s ease-out;
     transition: all 0.3s ease-out;
}

.mt-input input:focus + .label {
    position: relative;
}
