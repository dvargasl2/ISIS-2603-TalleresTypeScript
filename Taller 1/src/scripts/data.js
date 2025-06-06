var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, link, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }
    Serie.prototype.getId = function () {
        return this.id;
    };
    Serie.prototype.getName = function () {
        return this.name;
    };
    Serie.prototype.getChannel = function () {
        return this.channel;
    };
    Serie.prototype.getSeasons = function () {
        return this.seasons;
    };
    Serie.prototype.setId = function (id) {
        this.id = id;
    };
    Serie.prototype.setName = function (name) {
        this.name = name;
    };
    Serie.prototype.setChannel = function (channel) {
        this.channel = channel;
    };
    Serie.prototype.setSeasons = function (seasons) {
        this.seasons = seasons;
    };
    return Serie;
}());
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
    new Serie(7, "The Crown", "Netflix", 4, "A historical drama about the reign of Queen Elizabeth II.", "https://www.netflix.com/title/80025678", "https://i.imgur.com/6ZD2b9G.jpg"),
    new Serie(8, "Peaky Blinders", "BBC", 5, "A gangster family epic set in 1900s England.", "https://www.bbc.co.uk/programmes/b045fz8r", "https://i.imgur.com/jB9nqZR.jpg"),
    new Serie(9, "Black Mirror", "Netflix", 5, "An anthology series exploring a twisted, high-tech near-future where humanity's greatest innovations and darkest instincts collide.", "https://www.netflix.com/title/70264888", "https://i.imgur.com/t0uJ0iZ.jpg")
];
