export class Tag{

private constructor(private readonly key: string, public readonly color:string) {


}
toString(){
    return this.key;
}

}