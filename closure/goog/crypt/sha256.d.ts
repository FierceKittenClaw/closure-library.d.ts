declare module goog.crypt {

    /**
     * SHA-256 cryptographic hash constructor.
     *
     * @constructor
     * @extends {goog.crypt.Sha2}
     * @final
     * @struct
     */
    class Sha256 extends goog.crypt.Sha2 {
        constructor();
    }
}
