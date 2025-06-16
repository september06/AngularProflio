

export class Tag{
   static readonly ANGULAR = new Tag('Angular', 'linear-gradient(90deg, #DD0031, #C3002F, #A259FF, #FF69B4)');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'linear-gradient(90deg, #3178C6, #235A97)');
    static readonly HTML = new Tag('HTML', 'linear-gradient(90deg, #E44D26, #F16529)');
    static readonly CSS = new Tag('CSS', 'linear-gradient(90deg, #1572B6, #33AADD)');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'linear-gradient(90deg, #F7DF1E, #F4B400)');
    static readonly REACT = new Tag('React', 'linear-gradient(90deg, #61DAFB,rgb(117, 137, 183))');
    static readonly NODEJS = new Tag('Node.js', 'linear-gradient(90deg, #68A063, #3C873A)');
    static readonly EXPRESS = new Tag('Express', 'linear-gradient(90deg, #000000, #444444)');
    static readonly MONGODB = new Tag('MongoDB', 'linear-gradient(90deg, #47A248, #13AA52)');
    static readonly GIT = new Tag('Git', 'linear-gradient(90deg, #F05032, #DE4C36)');
    static readonly GITHUB = new Tag('GitHub', 'linear-gradient(90deg, #181717, #6e5494)');
    static readonly PYTHON = new Tag('Python', 'linear-gradient(90deg, #3776AB, #FFD43B)');
    static readonly DJANGO = new Tag('Django', 'linear-gradient(90deg, #092E20, #2BA977)');
    static readonly FLASK = new Tag('Flask', 'linear-gradient(90deg, #000000, #7F7F7F)');
    static readonly JAVA = new Tag('Java', 'linear-gradient(90deg,rgb(136, 152, 158), #EA2D2E)');
    static readonly SPRING = new Tag('Spring', 'linear-gradient(90deg, #6DB33F, #3A9A35)');
    static readonly CSHARP = new Tag('C#', 'linear-gradient(90deg,rgb(112, 34, 148), #68217A)');
    static readonly DOTNET = new Tag('.NET', 'linear-gradient(90deg, #512BD4, #0C2340)');
    static readonly RUBY = new Tag('Ruby', 'linear-gradient(90deg, #CC342D, #E0115F)');
    static readonly RAILS = new Tag('Rails', 'linear-gradient(90deg, #CC0000, #A00000)');
    static readonly SWIFT = new Tag('Swift', 'linear-gradient(90deg, #FA7343, #FFAC45)');
    static readonly KOTLIN = new Tag('Kotlin', 'linear-gradient(90deg, #7F52FF, #FFB300, #FF7043)');
    static readonly GO = new Tag('Go', 'linear-gradient(90deg, #00ADD8, #375EAB)');
    static readonly PHP = new Tag('PHP', 'linear-gradient(90deg, #777BB4, #4F5D95)');
    static readonly SQL = new Tag('SQL', 'linear-gradient(90deg, #336791, #00758F)');
    static readonly AWS = new Tag('AWS', 'linear-gradient(90deg, #FF9900, #232F3E)');
    static readonly AZURE = new Tag('Azure', 'linear-gradient(90deg, #0089D6, #005A9C)');
    static readonly DOCKER = new Tag('Docker', 'linear-gradient(90deg, #2496ED, #0DB7ED)');
    static readonly KUBERNETES = new Tag('Kubernetes', 'linear-gradient(90deg, #326CE5, #003366)');
    static readonly VUEJS = new Tag('Vue.js', 'linear-gradient(90deg, #4FC08D, #41B883, #35495E)');
    static readonly ASPNET = new Tag('.NET', 'linear-gradient(90deg, #512BD4, #2381C6)');
    static readonly JAVAFX = new Tag('JavaFX', 'linear-gradient(90deg, #1B72BE,rgb(149, 135, 135))');
    static readonly UML = new Tag('UML', 'linear-gradient(90deg, #F0C808, #7B1FA2)');
    static readonly VISUALPARADIGM = new Tag('Visual Paradigm', 'linear-gradient(90deg, #E60012, #F39800)');
    static readonly TCPIP = new Tag('TCP/IP', 'linear-gradient(90deg, #009688, #607D8B)');
    static readonly CLIENTSERVER = new Tag('Client/Server', 'linear-gradient(90deg, #00BCD4, #8BC34A)');
    static readonly UMLDIAGRAMS = new Tag('UML Diagrams', 'linear-gradient(90deg, #7B1FA2, #F0C808)');
    static readonly MYSQL = new Tag('MySQL', 'linear-gradient(90deg, #336791,rgb(131, 189, 202))');



private constructor(private readonly key: string, public readonly color:string) {


}
toString(){
    return this.key;
}

}