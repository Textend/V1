function setTitle(titleNum){

            switch(titleNum){
                case 1:
                    $("*.bookTitle").text("Moby Dick");
                    break;
                case 2:
                    $("*.bookTitle").text("Fundamentals of Fundamentals");
                    break;
                case 3:
                    $("*.bookTitle").text("Books: A History");
                    break;
                case 4:
                    $("*.bookTitle").text("Designing the User Interface");
                    break;
                case 5:
                    $("*.bookTitle").text("Designing the User Face");
                    break;
            }
        }