abstract class shape {
    constructor(readonly name: string, readonly sides: number, public area: number = null) { }
    abstract get calsArea(): number;
}
