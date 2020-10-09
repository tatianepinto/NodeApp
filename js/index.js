function sendApiToHtml(element){
    var textInstagram = `@${element.handler}-${element.instagramId}\xa0\ ${element.name}`;
    var textStatus = `${element.status}`;   
    var textDate = `${element.date}`;
    // var textMessage = `\xa0\- ${element.handler}`;

    var dateFormated = formateDate (new Date(textDate.replace(" ", "T")));

    var box = document.createElement("DIV");
    var textBox = document.createElement("DIV");
    var instagramAndStatus = document.createElement("DIV");
    var instagramName = document.createElement("DIV"); //InstaId + Name
    var dateAndMessage = document.createElement("DIV"); //Date + Handler
    var message = document.createElement("DIV");
    var status = document.createElement("DIV");
    var date = document.createElement("span");
    var influencerphoto = document.createElement("img");

    box.className = "influencer-box"; 
    textBox.className = "influencer-text";
    influencerphoto.className = "influencer-photo";
    instagramName.className = "instagramName";
    status.className = "status ";
    status.className += textStatus;
    date.className = "date";
    message.className = "message";
    instagramAndStatus.className = "instagramAndStatus";
    dateAndMessage.className = "dateAndMessage";

    influencerphoto.src = "images/Screen Shot 2020-08-08 at 2.17 1.png";             
    instagramName.innerText = textInstagram;
    status.innerText = textStatus.charAt(0).toUpperCase() + textStatus.slice(1);
    date.innerText = dateFormated;
    message.innerText = "\xa0\ -\xa0\ " + setMessages(textStatus);
    
    dateAndMessage.appendChild(date);
    dateAndMessage.appendChild(message);
    instagramAndStatus.appendChild(instagramName);
    instagramAndStatus.appendChild(status);
    textBox.appendChild(instagramAndStatus);
    textBox.appendChild(dateAndMessage);
    box.appendChild(influencerphoto); 
    box.appendChild(textBox);              
    document.body.appendChild(box);

    document.getElementById("influencer").appendChild(box);
  }

  function setMessages(textStatus){
      switch (textStatus) {
        case "activate":
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit massa";
        case "submit":
            return "Sed sagittis sem leo, non blandit est tempor at. Cras a urna eget nulla lobortis placerat";
        case "claimed":
            return "Claimed your node Snow Allure Vodka - Luxury Moments";
        default:
            break;
      }
  }

  function formateDate (date) {
    const d = date;
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${mo} ${da}, ${ye}`;
  }