//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package oc_acts.core;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import oc_acts.core.Result;
import java.util.Objects;
import org.springframework.http.ResponseEntity;

@JsonInclude(Include.NON_NULL)
public abstract class ResponseModel<T extends ResponseModel<?>> {
    private Result result;

    public ResponseModel() {
        this.result = Result.NO_RESULT;
    }

    public Result getResult() {
        return this.result;
    }

    public T setResult(Result result) {
        this.result = (Result)Objects.requireNonNull(result);
        return (T) this;
    }

    public ResponseEntity<T> toResponse() {
        return (ResponseEntity<T>) ResponseEntity.status(this.getResult().status()).body(this);
    }
}
