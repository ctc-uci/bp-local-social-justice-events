//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package oc_acts.core;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Objects;
import org.springframework.http.HttpStatus;

public final class Result {
    public static final Result NO_RESULT;
    private final Integer code;
    private final String message;
    private final HttpStatus status;

    private Result(Result.Builder builder) {
        this.code = (Integer)Objects.requireNonNull(builder.code);
        this.message = (String)Objects.requireNonNull(builder.message);
        this.status = (HttpStatus)Objects.requireNonNull(builder.status);
    }

    @JsonProperty
    public Integer code() {
        return this.code;
    }

    @JsonProperty
    public String message() {
        return this.message;
    }

    @JsonIgnore
    public HttpStatus status() {
        return this.status;
    }

    public boolean equals(Object o) {
        if (this == o) {
            return true;
        } else if (o != null && this.getClass() == o.getClass()) {
            Result result = (Result)o;
            return this.code.equals(result.code) && this.message.equals(result.message) && this.status == result.status;
        } else {
            return false;
        }
    }

    public int hashCode() {
        return Objects.hash(new Object[]{this.code, this.message, this.status});
    }

    public String toString() {
        return "Result[" + this.code + "]: '" + this.message + '\'';
    }

    static {
        NO_RESULT = (new Result.Builder()).code(0).message("No result set, did you forget to add one?").status(HttpStatus.NOT_IMPLEMENTED).build();
    }

    public static final class Builder {
        private Integer code;
        private String message;
        private HttpStatus status;

        public Builder() {
        }

        public Result.Builder code(Integer code) {
            this.code = code;
            return this;
        }

        public Result.Builder message(String message) {
            this.message = message;
            return this;
        }

        public Result.Builder status(HttpStatus status) {
            this.status = status;
            return this;
        }

        public Result build() {
            return new Result(this);
        }
    }
}
