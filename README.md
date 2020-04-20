# My Portfolio
Comedian Benton Ray Official Website

# Deployed Link
[bentonray.com](http://www.bentonray.com/)


# Visual

![Alt text](./src/components/images/benton.gif?raw=true "Preview")


# Technologies
* [React](https://reactjs.org/)
* [React-Router](https://reacttraining.com/react-router/web/guides/quick-start)
* JSX
* [Bandsintown](https://www.bandsintown.com/en)
* [AWS](https://aws.amazon.com/)
* [Docker](https://www.docker.com/)
* [MailChimp](https://mailchimp.com/?ds_rl=1276838&gclid=CjwKCAjwkPX0BRBKEiwA7THxiGEZDPPWakGBheyRU8xiYrwhmliTsRf80gFVezckPctcfh9bhRM7kRoC94oQAvD_BwE&gclsrc=aw.ds)




# Code Snippets
    - Contact Form

```JSX
  constructor(props) {
        super(props);
        this.state  = { name : "",
                        email: "",
                        description: "",

                        }
        this.submitToAPI = this.submitToAPI.bind(this);
    }
        submitToAPI(event) {
            event.preventDefault();
            const url = "";
            const { name, email, description } = this.state;

             const nameRe = /[A-Za-z]{1}[A-Za-z]/;
             if (!nameRe.test(name)) {
                          alert ("Please enter your name");
                 return;
             }
             if (!email) {
                 alert ("Please enter your email");
                 return;
             }
            const data = {
                name : name,
                email : email,
                description : description
            };

            $.ajax({
                type: "POST",
                url : url,
                dataType : "json",
                crossDomain: "true",
                contentType: "application/json; charset=utf-8",
                data : JSON.stringify(data),

                success: function () {
                    alert('Thank you '+ data.name + '!');

                },
                error: function () {
                    alert("something went wrong...");
                }
            });

        }
```

    

# Author
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)