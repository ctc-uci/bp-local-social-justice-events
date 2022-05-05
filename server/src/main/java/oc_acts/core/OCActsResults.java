//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package oc_acts.core;

import oc_acts.core.Result.Builder;
import java.util.stream.Stream;
import org.springframework.http.HttpStatus;

public final class OCActsResults {
    public static final Result EVENTS_FOUND;
    public static final Result NO_EVENTS_FOUND;

    private OCActsResults() {
        throw new AssertionError("No Instances of Results can be created");
    }

    static Stream<Result> toStream() {
        return Stream.of(EVENTS_FOUND, NO_EVENTS_FOUND);
    }

    static {
        EVENTS_FOUND = (new Builder()).status(HttpStatus.OK).code(2000).message("Events found").build();
        NO_EVENTS_FOUND = (new Builder()).status(HttpStatus.OK).code(2001).message("No events found").build();
    }
}
