import React, { useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';

const Introduction = () => {
    return (
        <div>
            <h1>Introduction</h1>
            <p>This site is for anyone who is struggling with mental illness, or just having a bad day, come over
here and blog, what's on your mind. This site is made to provide information to those to who need
help and can't find the right resources. This site is a place to leave your information or phone
number; if possible we will try to give you some resouces with information, and also groups that are
available to join on media websites. Lastly , you can blog on here about your day to relieve the
pressure and support each other, and also blog about good things as well, so just like a rainbow,
there's always rains. No bullying, sexism, racism, etc will be tolerated on this site..Thank you. Please
rank sites that have work the best for you and leave comments</p>       

          <h5>Thanks....</h5>
         <button onClick={(e) => (window.location.href='/')}>
      Home Page </button>

        </div>
    );
};

export default Introduction;