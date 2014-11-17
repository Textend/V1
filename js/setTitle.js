function setTitle(titleNum){

            switch(titleNum){
                case 1:
                    $("*.bookTitle").text("Moby Dick");
                    $("*.bookAuthor").text("Herman Melville");
                    break;
                case 2:
                    $("*.bookTitle").text("Fundamentals of Fundamentals");
                    $("*.bookAuthor").text("Quadarius Moore");
                    break;
                case 3:
                    $("*.bookTitle").text("Books: A History");
                    $("*.bookAuthor").text("Brian Booker");
                    break;
                case 4:
                    $("*.bookTitle").text("Designing the User Interface");
                    $("*.bookAuthor").text("Ben Shneiderman");
                    break;
                case 5:
                    $("*.bookTitle").text("Designing the User Face");
                    $("*.bookAuthor").text("Nicholas Cage");
                    break;
            }
        }