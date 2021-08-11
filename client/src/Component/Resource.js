import React, { useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';

const Resources = () => {
    return (
        <div>
            <h2>Websites Resouces</h2>
            <a href="https://www.nami.org/About-Mental-Illness/Treatments/Types-of-Mental-Health-Professional">Nami.org</a>   

            <h2>Emergency Numbers!!!</h2>

            <p>Call 1-800-273-8255 and Press 1</p>
            <p>Text 838255</p>
            <p>1-800-662-HELP (4357)</p>
            <p>(866) 615-6464</p>
            <p>Crisis Hotline 877.695.NEED (6333)</p>
            <p>In a crisis?
Text HOME to 741741 to connect with a Crisis Counselor
Free 24/7 support at your fingertips</p>
            <p>US and Canada: text 741741</p>
            <p>911!</p>
            <p>216.762.059</p>
            <p>1-800-273-8255</p>

            <h2>Facebook:</h2>
            <p>If you have a Facebook account, there
are plenty of decent mental health
groups for those who are experiening
mental illness and also for their
spouses/partners (who might need
support and knowledge from others.
Plus, here is a reason why you might
want to try out Facebook, check out this
this link:</p>

<a href="https://www.makeuseof.com/ways-facebook-help-mental-health/">Facebook mental health group</a>   


             <h2>Helpful Tools:</h2>
             <ul>
                 <li>music</li>
                 <li>meditation</li>
                 <li>incense</li>
                 <li>exerise</li>
                 <li>hobbies</li>
                 <li>Steam: this is a website that has games online,
some are free, which can be used to relax those
who are not into other methods of relaxing, etc.
You do have to sign up for the site, but it's worth
checking out, here is the website: <a href="https://store.steampowered.com/">Steam game site</a></li>
             </ul>
          
         <button onClick={(e) => (window.location.href='/')}>
      Home Page </button>
      
      <button onClick={(e) => (window.location.href='/')}>
      Blog Page </button>

      <button onClick={(e) => (window.location.href='/')}>
      Post a Blog </button>

      <button onClick={(e) => (window.location.href= '/Introduction')}>
      Introduction Page </button>

      <button onClick={(e) => (window.location.href='/')}>
      Log off </button>
        </div>
    );
};

export default Resources;