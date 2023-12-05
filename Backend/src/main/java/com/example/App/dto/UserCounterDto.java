package com.example.App.dto;

import lombok.Builder;
import lombok.Getter;

public class UserCounterDto {

    private long counter;

    private UserCounterDto(Builder builder) {
        counter = builder.counter;
    }

    public long getCounter() {
        return counter;
    }

    @Override
    public String toString() {
        return "MovieCounterDto{" +
                "counter=" + counter +
                '}';
    }

    public static final class Builder {
        private long counter;

        public Builder() {
        }

        public Builder counter(Long counter) {
            this.counter = counter;
            return this;
        }

        public UserCounterDto build() {
            return new UserCounterDto(this);
        }
    }

}
