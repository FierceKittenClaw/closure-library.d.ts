declare module goog.labs.testing {

    /**
     * The Equals matcher.
     *
     * @param {!Object} expectedObject The expected object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class ObjectEqualsMatcher {
        constructor(expectedObject: Object);
    }

    /**
     * The HasProperty matcher.
     *
     * @param {string} property Name of the property to test.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class HasPropertyMatcher {
        constructor(property: string);
    }

    /**
     * The InstanceOf matcher.
     *
     * @param {!Object} object The expected class object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class InstanceOfMatcher {
        constructor(object: Object);
    }

    /**
     * The IsNullOrUndefined matcher.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class IsNullOrUndefinedMatcher {
        constructor();
    }

    /**
     * The IsNull matcher.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class IsNullMatcher {
        constructor();
    }

    /**
     * The IsUndefined matcher.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class IsUndefinedMatcher {
        constructor();
    }
}
